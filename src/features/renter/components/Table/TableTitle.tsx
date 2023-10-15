
type TableTitleProps = {
    title: string
}
export const TableTitle = (props: TableTitleProps) => {
  return (
    <th>{ props.title }</th>
  )
}
