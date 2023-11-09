// @ts-ignore
export const List=({list,users})=>{
  
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        // @ts-ignore
        list.map(project=><tr key={project.personId}>
          <td>{project.name}</td>
          
          <td>{users.find(
            // @ts-ignore
            user=>user.id == project.personId)?.name || '未知'
            }
          </td>
        </tr>)
      }
    </tbody>
  </table>
}