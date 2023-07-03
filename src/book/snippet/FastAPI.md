# FastAPI

```python
from fastapi import FastAPI
from fastapi import HTTPException
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from sqlalchemy.orm import Session
from sqlmodel import SQLModel, create_engine, Session

# Define the database URL
DATABASE_URL = "sqlite:///./test.db"

# Create the database engine
engine = create_engine(DATABASE_URL, echo=True)

# Create a base class for our models
class BaseModel(SQLModel):
    id: int = None

    class Config:
        orm_mode = True

# Define our User model
class User(BaseModel):
    username: str
    password: str

# Create the users table
BaseModel.metadata.create_all(engine)

# Create a password context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Define a function to verify passwords
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# Define a function to get a user by their username
def get_user(username: str, db: Session):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Define a function to authenticate a user
def authenticate_user(username: str, password: str, db: Session):
    user = get_user(username, db)
    if not verify_password(password, user.password):
        raise HTTPException(status_code=400, detail="Incorrect password")
    return user

# Create an instance of the FastAPI class
app = FastAPI()

# Define the OAuth2 scheme
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

# Define a function to get the current user
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        token_data = TokenData(username=username)
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    user = get_user(username=token_data.username, db=db)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Define a function to get the database session
def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()

# Define a route to create a new user
@app.post("/users/")
def create_user(username: str, password: str, db: Session = Depends(get_db)):
    hashed_password = pwd_context.hash(password)
    user = User(username=username, password=hashed_password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

# Define a route to authenticate a user and generate a token
@app.post("/token/")
def generate_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(form_data.username, form_data.password, db)
    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}

# Define a protected route
@app.get("/protected/")
def protected_route(user: User = Depends(get_current_user)):
    return {"message": "Hello, World!"}
```
