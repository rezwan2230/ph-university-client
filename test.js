
const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN_DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE_STUDENT",
      },
    ],
  },
];

//For MainLayout Sidebar
const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NavLink",
    });
  }
  if(item.children){
      item.children.forEach((child)=>{
          acc.push({
            key: item.name,
            label: "NavLink",
            children : item.children.map(child=>({
               key : child.name,
               label: "NavLink",
            }))
          })
      })
  }
  return acc;
}, []);
console.log(JSON.stringify(newArray));

// For admin routes
// const newArray = adminPaths2.reduce((acc, item)=>{
//     if(item.path && item.element){
//         acc.push({
//             path : item.path,
//             element : item.element
//         })
//     }
//     if(item.children){
//         item.children.forEach((child)=>{
//             acc.push({
//                 path : child.path,
//                 element : child.element
//             })
//         })
//     }
//     return acc
// }, [])
// console.log(newArray);
