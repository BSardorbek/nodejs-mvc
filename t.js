let menu = [
  { id: 1, title: 'Menu 1', parent_id: 0 },
  { id: 2, title: 'Sub 1.1', parent_id: 1 },
  { id: 3, title: 'Sub 1.2', parent_id: 1 },
  { id: 4, title: 'Sub 1.3', parent_id: 1 },
  { id: 5, title: 'Menu 2', parent_id: 0 },
  { id: 6, title: 'Sub 2.1', parent_id: 5 },
  { id: 7, title: 'Sub Sub 2.1.1', parent_id: 6 },
  { id: 8, title: 'Sub 2.2', parent_id: 5 },
  { id: 9, title: 'Menu 3', parent_id: 0 },
];

let result;
function hasChild(id) {
  menu.forEach((row) => {
    if (row['parent_id'] == id) {
      return true;
    }
    return false;
  });
}
// hasChild(rows, row['id']);
function buildMenu(parent = 0) {
  result = '<ul>';

  menu.forEach((row) => {
    if (row['parent_id'] == parent) {
      result += `<li>${row['title']}`;
      if (hasChild(row['id'])) {
        result += build_menu(row['id']);
        result += `<li>${row['title']}</li>`;
      }
    }

    result += '</li>';
  });
  result += '</ul>';

  return result;
}

console.log(buildMenu());

// let menu = [
//   { id: 1, title: 'Menu 1', parent_id: 0 },
//   { id: 2, title: 'Sub 1.1', parent_id: 1 },
//   { id: 3, title: 'Sub 1.2', parent_id: 1 },
//   { id: 4, title: 'Sub 1.3', parent_id: 1 },
//   { id: 5, title: 'Menu 2', parent_id: 0 },
//   { id: 6, title: 'Sub 2.1', parent_id: 5 },
//   { id: 7, title: 'Sub Sub 2.1.1', parent_id: 6 },
//   { id: 8, title: 'Sub 2.2', parent_id: 5 },
//   { id: 9, title: 'Menu 3', parent_id: 0 },
// ];

// menu.forEach((el) => {
//   if (el.parent_id == 0) {
//     console.log(el['title']);
//   }
// });
