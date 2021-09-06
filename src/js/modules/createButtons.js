
const buttonCreation = (data) => {

  data.forEach(branch => {
    let branch_name = branch.name;
    let element_names = Object.keys(branch.elements)
    generateButtons(element_names, branch_name);
  })
}


function generateButtons(element, branchName)
{
  element.forEach((name, i) => {
    // console.log(name, branchName)
    i += 1;
    const button = document.createElement('button');
    button.classList.add(branchName, branchName+'--'+i)
    button.textContent = name;
    button.dataset.id = name
    button.dataset.name = branchName;
    document.body.appendChild(button)
  })
}
export default buttonCreation
