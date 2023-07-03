---
id: accessibility-testing
title: "Accessibility testing JS"
---

Playwright can be used to test your application for many types of accessibility issues.

A few examples of problems this can catch include:
- Text that would be hard to read for users with vision impairments due to poor color contrast with the background behind it
- UI controls and form elements without labels that a screen reader could identify
- Interactive elements with duplicate IDs which can confuse assistive technologies

The following examples rely on the [`@axe-core/playwright`](https://npmjs.org/@axe-core/playwright) package which adds support for running the [axe accessibility testing engine](https://www.deque.com/axe/) as part of your Playwright tests.

:::note Disclaimer
Automated accessibility tests can detect some common accessibility problems such as missing or invalid properties. But many accessibility problems can only be discovered through manual testing. We recommend using a combination of automated testing, manual accessibility assessments, and inclusive user testing.

For manual assessments, we recommend [Accessibility Insights for Web](https://accessibilityinsights.io/docs/web/overview/?referrer=playwright-accessibility-testing-js), a free and open source dev tool that walks you through assessing a website for [WCAG 2.1 AA](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa) coverage.
:::
## Example accessibility tests

Accessibility tests work just like any other Playwright test. You can either create separate test cases for them, or integrate accessibility scans and assertions into your existing test cases.

The following examples demonstrate a few basic accessibility testing scenarios.

### Scanning an entire page

This example demonstrates how to test an entire page for automatically detectable accessibility violations. The test:
::: tabs#lang
@tab js
1. Imports the `@axe-core/playwright` package
1. Uses normal Playwright Test syntax to define a test case
1. Uses normal Playwright syntax to navigate to the page under test
1. Awaits `AxeBuilder.analyze()` to run the accessibility scan against the page
1. Uses normal Playwright Test [assertions](./test-assertions) to verify that there are no violations in the returned scan results
@tab java
1. Imports the [`com.deque.html.axe-core/playwright`](https://mvnrepository.com/artifact/com.deque.html.axe-core/playwright) package
1. Uses normal JUnit 5 `@Test` syntax to define a test case
1. Uses normal Playwright syntax to open a browser and navigate to the page under test
1. Invokes `AxeBuilder.analyze()` to run the accessibility scan against the page
1. Uses normal JUnit 5 test assertions to verify that there are no violations in the returned scan results
:::


::: code-tabs#js
@tab ts
```js tab=js-ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://your-site.com/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
```
@tab js
```js tab=js-js
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default; // 1

test.describe('homepage', () => { // 2
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://your-site.com/'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
```
@tab java
```java
import com.deque.html.axecore.playwright.*; // 1
import com.deque.html.axecore.utilities.axeresults.*;

import org.junit.jupiter.api.*;
import com.microsoft.playwright.*;

import static org.junit.jupiter.api.Assertions.*;

public class HomepageTests {
  @Test // 2
  void shouldNotHaveAutomaticallyDetectableAccessibilityIssues() throws Exception {
    Playwright playwright = Playwright.create();
    Browser browser = playwright.chromium().launch();
    BrowserContext context = browser.newContext();
    Page page = context.newPage();

    page.navigate("https://your-site.com/"); // 3

    AxeResults accessibilityScanResults = new AxeBuilder(page).analyze(); // 4

    assertEquals(Collections.emptyList(), accessibilityScanResults.getViolations()); // 5
  }
}
```
:::
### Configuring axe to scan a specific part of a page
::: tabs#lang
@tab js
`@axe-core/playwright` supports many configuration options for axe. You can specify these options by using a Builder pattern with the `AxeBuilder` class.
@tab java
`com.deque.html.axe-core/playwright` supports many configuration options for axe. You can specify these options by using a Builder pattern with the `AxeBuilder` class.
:::
For example, you can use [`AxeBuilder.include()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderincludeselector-string--string) to constrain an accessibility scan to only run against one specific part of a page.

`AxeBuilder.analyze()` will scan the page *in its current state* when you call it. To scan parts of a page that are revealed based on UI interactions, use [Locators](./locators.md) to interact with the page before invoking `analyze()`:
::: code-tabs#js
@tab js
```js
test('navigation menu flyout should not have automatically detectable accessibility violations', async ({ page }) => {
  await page.goto('https://your-site.com/');

  await page.getByRole('button', { name: 'Navigation Menu' }).click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  await page.locator('#navigation-menu-flyout').waitFor();

  const accessibilityScanResults = await new AxeBuilder({ page })
    .include('#navigation-menu-flyout')
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
@tab java
```java
@Test
void navigationMenuFlyoutShouldNotHaveAutomaticallyDetectableAccessibilityViolations() throws Exception {
  page.navigate("https://your-site.com/");

  page.locator("button[aria-label=\"Navigation Menu\"]").click();

  // It is important to waitFor() the page to be in the desired
  // state *before* running analyze(). Otherwise, axe might not
  // find all the elements your test expects it to scan.
  page.locator("#navigation-menu-flyout").waitFor();

  AxeResults accessibilityScanResults = new AxeBuilder(page)
    .include(Arrays.asList("#navigation-menu-flyout"))
    .analyze();

  assertEquals(Collections.emptyList(), accessibilityScanResults.getViolations());
}
```
:::
### Example 3: Scanning for WCAG violations

By default, axe checks against a wide variety of accessibility rules. Some of these rules correspond to specific success criteria from the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/TR/WCAG21/), and others are "best practice" rules that are not specifically required by any WCAG criterion.

You can constrain an accessibility scan to only run those rules which are "tagged" as corresponding to specific WCAG success criteria by using [`AxeBuilder.withTags()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderwithtagstags-stringarray). For example, [Accessibility Insights for Web's Automated Checks](https://accessibilityinsights.io/docs/web/getstarted/fastpass/?referrer=playwright-accessibility-testing-js) only include axe rules that test for violations of WCAG A and AA success criteria; to match that behavior, you would use the tags `wcag2a`, `wcag2aa`, `wcag21a`, and `wcag21aa`.

Note that [automated testing cannot detect all types of WCAG violations](#disclaimer).
::: code-tabs#js
@tab js
```js
test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://your-site.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
@tab java
```java
AxeResults accessibilityScanResults = new AxeBuilder(page)
  .withTags(Arrays.asList("wcag2a", "wcag2aa", "wcag21a", "wcag21aa"))
  .analyze();

assertEquals(Collections.emptyList(), accessibilityScanResults.getViolations());
```
:::
You can find a complete listing of the rule tags axe-core supports in [the "Axe-core Tags" section of the axe API documentation](https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags).

## Handling known issues

A common question when adding accessibility tests to an application is "how do I suppress known violations?" The following examples demonstrate a few techniques you can use.

### Excluding individual elements from a scan

If your application contains a few specific elements with known issues, you can use [`AxeBuilder.exclude()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderexcludeselector-string--string) to exclude them from being scanned until you're able to fix the issues.

This is usually the simplest option, but it has some important downsides:
* `exclude()` will exclude the specified elements *and all of their descendants*. Avoid using it with components that contain many children.
* `exclude()` will prevent *all* rules from running against the specified elements, not just the rules corresponding to known issues.

Here is an example of excluding one element from being scanned in one specific test:
::: code-tabs#js
@tab js
```js
test('should not have any accessibility violations outside of elements with known issues', async ({ page }) => {
  await page.goto('https://your-site.com/page-with-known-issues');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .exclude('#element-with-known-issue')
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
@tab java
```java
AxeResults accessibilityScanResults = new AxeBuilder(page)
  .exclude(Arrays.asList("#element-with-known-issue"))
  .analyze();

assertEquals(Collections.emptyList(), accessibilityScanResults.getViolations());
```
:::
If the element in question is used repeatedly in many pages, consider [using a test fixture](#using-a-test-fixture-for-common-axe-configuration) to reuse the same `AxeBuilder` configuration across multiple tests.

### Disabling individual scan rules

If your application contains many different pre-existing violations of a specific rule, you can use [`AxeBuilder.disableRules()`](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md#axebuilderdisablerulesrules-stringarray) to temporarily disable individual rules until you're able to fix the issues.

You can find the rule IDs to pass to `disableRules()` in the `id` property of the violations you want to suppress. A [complete list of axe's rules](https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md) can be found in `axe-core`'s documentation.

::: code-tabs#js
@tab js
```js
test('should not have any accessibility violations outside of rules with known issues', async ({ page }) => {
  await page.goto('https://your-site.com/page-with-known-issues');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .disableRules(['duplicate-id'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
@tab java
```java
AxeResults accessibilityScanResults = new AxeBuilder(page)
  .disableRules(Arrays.asList("duplicate-id"))
  .analyze();

assertEquals(Collections.emptyList(), accessibilityScanResults.getViolations());
```
:::
### Using snapshots to allow specific known issues

If you would like to allow for a more granular set of known issues, you can use [Snapshots](./test-snapshots.md) to verify that a set of pre-existing violations has not changed. This approach avoids the downsides of using `AxeBuilder.exclude()` at the cost of slightly more complexity and fragility.

Do not use a snapshot of the entire `accessibilityScanResults.violations` array. It contains implementation details of the elements in question, such as a snippet of their rendered HTML; if you include these in your snapshots, it will make your tests prone to breaking every time one of the components in question changes for an unrelated reason:

::: code-tabs#js
@tab js
```js
// Don't do this! This is fragile.
expect(accessibilityScanResults.violations).toMatchSnapshot();
```
:::
Instead, create a *fingerprint* of the violation(s) in question that contains only enough information to uniquely identify the issue, and use a snapshot of the fingerprint:
::: code-tabs#js
@tab js
```js
// This is less fragile than snapshotting the entire violations array.
expect(violationFingerprints(accessibilityScanResults)).toMatchSnapshot();
// my-test-utils.js
function violationFingerprints(accessibilityScanResults) {
    const violationFingerprints = accessibilityScanResults.violations.map(violation => ({
        rule: violation.id,
        // These are CSS selectors which uniquely identify each element with
        // a violation of the rule in question.
        targets: violation.nodes.map(node => node.target),
    }));

    return JSON.stringify(violationFingerprints, null, 2);
}
```
:::
## Exporting scan results as a test attachment

Most accessibility tests are primarily concerned with the `violations` property of the axe scan results. However, the scan results contain more than just `violations`. For example, the results also contain information about rules which passed and about elements which axe found to have inconclusive results for some rules. This information can be useful for debugging tests that aren't detecting all the violations you expect them to.

To include *all* of the scan results as part of your test results for debugging purposes, you can add the scan results as a test attachment with [`testInfo.attach()`](./api/class-testinfo#test-info-attach). [Reporters](./test-reporters) can then embed or link the full results as part of your test output.

The following example demonstrates attaching scan results to a test:
::: code-tabs#js
@tab js
```js
test('example with attachment', async ({ page }, testInfo) => {
  await page.goto('https://your-site.com/');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  await testInfo.attach('accessibility-scan-results', {
    body: JSON.stringify(accessibilityScanResults, null, 2),
    contentType: 'application/json'
  });

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
:::
## Using a test fixture for common axe configuration

[Test fixtures](./test-fixtures) are a good way to share common `AxeBuilder` configuration across many tests. Some scenarios where this might be useful include:
* Using a common set of rules among all of your tests
* Suppressing a known violation in a common element which appears in many different pages
* Attaching standalone accessibility reports consistently for many scans

The following example demonstrates creating and using a test fixture that covers each of those scenarios.

### Creating a fixture

This example fixture creates an `AxeBuilder` object which is pre-configured with shared `withTags()` and `exclude()` configuration.
::: code-tabs#js
@tab ts
```js tab=js-ts
// axe-test.ts
import { test as base } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder;
};

// Extend base test by providing "makeAxeBuilder"
//
// This new "test" can be used in multiple test files, and each of them will get
// a consistently configured AxeBuilder instance.
export const test = base.extend<AxeFixture>({
  makeAxeBuilder: async ({ page }, use, testInfo) => {
    const makeAxeBuilder = () => new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .exclude('#commonly-reused-element-with-known-issue');

    await use(makeAxeBuilder);
  }
});
export { expect } from '@playwright/test';
```
@tab js
```js tab=js-js
// axe-test.js
const base = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

// Extend base test by providing "makeAxeBuilder"
//
// This new "test" can be used in multiple test files, and each of them will get
// a consistently configured AxeBuilder instance.
exports.test = base.test.extend({
  makeAxeBuilder: async ({ page }, use, testInfo) => {
    const makeAxeBuilder = () => new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .exclude('#commonly-reused-element-with-known-issue');

    await use(makeAxeBuilder);
  }
});
exports.expect = base.expect;
```
@tab java
```java
class AxeTestFixtures extends TestFixtures {
  AxeBuilder makeAxeBuilder() {
    return new AxeBuilder(page)
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .exclude('#commonly-reused-element-with-known-issue');
  }
}
```
:::
### Using a fixture

To use the fixture, replace the earlier examples' `new AxeBuilder({ page })` with the newly defined `makeAxeBuilder` fixture:
::: code-tabs#js
@tab js
```js
const { test, expect } = require('./axe-test');

test('example using custom fixture', async ({ page, makeAxeBuilder }) => {
  await page.goto('https://your-site.com/');

  const accessibilityScanResults = await makeAxeBuilder()
     // Automatically uses the shared AxeBuilder configuration,
     // but supports additional test-specific configuration too
    .include('#specific-element-under-test')
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```
@tab java
```java
public class HomepageTests extends AxeTestFixtures {
  @Test
  void exampleUsingCustomFixture() throws Exception {
    page.navigate("https://your-site.com/");

    AxeResults accessibilityScanResults = makeAxeBuilder()
      // Automatically uses the shared AxeBuilder configuration,
      // but supports additional test-specific configuration too
      .include('#specific-element-under-test')
      .analyze();

    assertEquals(Collections.emptyList(), accessibilityScanResults.getViolations());
  }
}
```
:::