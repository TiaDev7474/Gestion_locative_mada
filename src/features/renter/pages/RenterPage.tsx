import { AddButton, FilterButton, SearchField, TableView } from "../components"

export const RenterPage = () => {
  return (
    <div>
        <div>
            <h3>Renter Management</h3>
            <AddButton />
        </div>
        <div>
            <SearchField />
            <FilterButton />    
        </div>
        <div>
            <TableView />
        </div>
    </div>
  )
}
