# docker-compose

```yaml
version: '3'

services:
  centos:
    image: centos:7
    container_name: centos
    ports:
      - 4001:80
    networks:
      - ws
    volumes:
      - E:/volume/centos/etc:/etc
      - E:/volume/centos/opt:/opt
      - E:/volume/centos/var:/var
      - E:/volume/centos/usr:/usr
    tty: true
    stdin_open: true
    # restart: unless-stopped
    
networks:
  ws:

```
