import { AddButton, FilterButton, SearchField, TableView } from "../components"

export const RenterPage = () => {
  return (
    <div className="w-full ">
        <div className="w-full flex justify-between mb-8">
            <h3 className="text-3xl font-semibold">Renter Management</h3>
            <AddButton />
        </div>
        <div className="flex justify-between mb-8">
            <SearchField />
            <FilterButton />    
        </div>
        <div>
            <TableView />
        </div>
    </div>
  )
}
