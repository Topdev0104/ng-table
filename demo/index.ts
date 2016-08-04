import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {TableSectionComponent} from './components/table-section';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

let gettingStarted = require('./getting-started.md');

@Component({
  selector: 'app',
  template: `
  <main class="bd-pageheader">
    <div class="container">
      <h1>ng2-table</h1>
      <p>Native Angular2 directives for Table</p>
      <a class="btn btn-primary" href="https://github.com/valor-software/ng2-table">View on GitHub</a>
      <div class="row">
       <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=valor-software&repo=ng2-table&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
      </div>
    </div>
  </main>

  <div class="container">
    <section id="getting-started">${gettingStarted}</section>

    <table-section class="col-md-12"></table-section>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/valor-software/ng2-table">ng2-table</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>
    </div>
  </footer>
  `,
  directives: [
    NgClass,
    TableSectionComponent
  ]
})
export class DemoComponent {
}

bootstrap(DemoComponent, [
  disableDeprecatedForms(),
  provideForms()
]);
