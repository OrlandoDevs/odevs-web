---
title: Decoupling application logic from your framework
description: How to decouple application logic from your framework to make your angular apps more modular and testable.
date: 2016-03-22
author: David Brown
tags:
  - second-tag
---


In recent years, JavaScript has evolved at a rapid pace. So rapid that any application you're working on as you read this will be nearly deprecated by the time you launch it. Okay, that might be a bit hyperbolic but at the very least something newer and better will be available. This speed has prompted me to think of new ways to approach front-end applications to yield maximum reusability across frameworks by refactoring the core logic of the application into self-contained ES6 modules.

A goal in writing any application should be to write the application logic outside the framework then within your framework write a wrapper to use your module. This facilitates the migration process between frameworks and versions.<br><br>

### The Why<br>

## **More testable code** <br><br>

When the logic is separated into it's own pure JavaScript module instead of defined in the framework, the tests can be run on just the module without the overhead of the framework. For example, with Angular, the controller functions can be split into their own modules so that when the tests are run, only the controller function is being tested. This keeps the framework out of the tests which makes the test cleaner, easier to run and maintain, and yields to my next point of modularity and reusability.<br><br>

## **Modularity and maintainability**<br><br>

One issue that the JavaScript community suffers from, is a proclivity to reinvention of the wheel. Try to find a modal library - there are dozens of them. This approach lets you (or another developer if you open source it - and you should open source your modules when applicable) reuse it in future projects. These modules should be small enough to allow other developers to easily contribute to your module. This modularity promotes an easier path for migrations to new frameworks as well.<br><br>

## **Migration path**<br><br>

The examples below suggests that you can inject your framework-specific libraries into your extracted module. You can do this but I would suggest against it in place of using another framework-agnostic library from the start and locking the version of the dependency. Then during a migration, you can run your tests to verify that it still works and refactor if not. There will be times when you will have to fix the module upon migration to allow for an updated injected library since updating libraries during a migration is an opportune time to do so. In most cases, fixing a module is a lot easier than re-writing the whole module.<br><br>

Even better than injecting libraries, I suggest using built in browser functions. In the case of Angular's `$http`, I suggest using the browser’s fetch() function (and Github’s fetch polyfill for not yet supported browsers). Then when the module is used elsewhere, it works exactly as it did to begin with because it has no reliance on a specific framework.
The How

Let’s say we are building an Angular app with a controller named BusinessCtrl and we want to integrate a pure JavaScript BusinessLogic module. Here are a few ways to do this which allow easier migrations to Angular 2 (using controller-as syntax in the 1.x examples). The following examples are not just limited to exported classes but can also be used when exporting a function from a module.<br><br>

```javascript
// Defining your module - BusinessLogic.js 
// you could import alternatives to framework-specific libraries here
export default class BusinessLogic {
  constructor(/* injected libraries here */) {
    return this;
  }
  doLogic() {
    // ..
  }
}
```

One approach:

```javascript
// Defining the controller
import {BusinessLogic} from './BusinessLogic';
class MyCtrl extends BusinessLogic {
  constructor() {
    super();
  }
}

angular
  .module('your-module')
  .controller('MyCtrl', MyCtrl);
  ```

A better approach by skipping the boilerplate:

```js
import {BusinessLogic} from './BusinessLogic';
angular
  .module('your-module')
  .controller('MyCtrl', BusinessLogic);

Using your module with directives or Angular 1.5’s components:

import {BusinessLogic} from './BusinessLogic';
// return a newly instantiated module in the controller of your returned object
controller() {
  return new BusinessLogic();
}

// better approach (less boilerplate)
controller: BusinessLogic
```

<br>
Now let's compare this to the component syntax for Angular 2.

```js
import {Component} from 'angular2/angular2'

@Component({
  selector: 'my-component',
  template: '<div>Hello my name is . <button (click)="sayMyName()">Say my name</button></div>'
})
export class MyComponent {
  constructor() {
    this.name = 'Max'
  }
  sayMyName() {
    console.log('My name is', this.name)
  }
}
```

<br>
You'll notice that the MyComponent class looks an awful lot like the BusinessLogic class in the first example. This creates the reusability factor mentioned in the beginning of this article and makes migrations from framework to framework (or updated versions of your framework) that much easier.<br><br>

One caveat to the approach for modularity is that you end up with multiple instances of your module. Behind the scenes each time it's being called, it's instantiating a new object. To avoid this you could use a singleton (example in ES6). Be careful when using singletons though as they are considered an anti-pattern and generally considered poor practice to use.<br><br>

Another caveat is when you have to call $scope.$apply(). In this case, you will need to inject $scope into your module to allow you to run this. This is an easy refactor when migrating though because it is easy to find and remove these calls.<br><br>

I hope I’ve inspired you to think more critically about the way you approach your applications. I would thoroughly enjoy hearing your thoughts on this pattern as well as suggestions for improvement.<br><br>

### tl;dr

Writing your modules outside the framework lets you test them easier, creates more modular/reusable code, and yields to easier migrations from framework to framework and updating versions of a framework.<br><br>

---

### David Brown

David is a front-end developer in Orlando, FL with a passion for creating quality code and keeping up with the latest development standards and tools.

<img src="/static/img/twitter--v1.png"
alt="twitter logo"
class="h-3.5 w-3.5 inline-flex"/><a href ="https://twitter.com/theonetheonlydb" class = "hover:text-indigo-400"> theonetheonlydb</a>
<img src="/static/img/github.png"
alt="twitter logo"
class="h-8 w-8 inline-flex"/><a href ="https://github.com/theonetheonlydavidbrown" class = "hover:text-indigo-400"> theonetheonlydavidbrown</a>
<br><br><br>
