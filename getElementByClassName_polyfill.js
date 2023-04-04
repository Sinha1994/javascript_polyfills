{
  /* <div class='a' id="root">
  <div class='b' id='b-1'>
    <div class='a' id='a-2'>
      <div class='d' id='d-1'></div>
    </div>
    <div class='c' id='c-1'>
      <div class='a' id='a-3'>
        <div class='d' id='d-2'></div>
      </div>
    </div>
  </div>
</div> */
}

const findByClass = function (root, className) {
  let match = [];
  let idx = Array.from(root.classList).indexOf(className);
  if (idx >= 0) {
    match.push(root.id);
  }
  const children = Array.from(root.children);
  if (children.length > 0)
    children.forEach((element) => {
      match.push(...findByClass(element, className));
    });
  return match;
};

const root = document.getElementById("root");
console.log(findByClass(root, "a"));
