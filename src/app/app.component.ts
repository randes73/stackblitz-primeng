import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  files3: TreeNode[];

  constructor() {}

  ngOnInit() {
    this.files3 = Array.from({ length: 50 }).map((_, i) =>
      this.createNode(i, 1000)
    );
  }

  createNode(i: number, children: number): TreeNode {
    let node: TreeNode = {
      label: 'Node ' + i,
      data: 'Node ' + i,
      selectable: true,
      children: Array.from({ length: children }).map((_, j) => {
        return {
          label: 'Node ' + i + '.' + j,
          data: 'Node ' + i + '.' + j,
        };
      }),
    };

    return node;
  }
}
