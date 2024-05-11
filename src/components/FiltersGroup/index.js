import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingFilteredList = () => {
    const {ratingList} = props
    return ratingList.map(rating => {
      const {activeRatingId, changeRating} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li key={rating.ratingId} onClick={onClickRatingItem}>
          <img src={rating.imageUrl} alt={`rating ${rating.ratingId}`} />
          <p>& up</p>
        </li>
      )
    })
  }

  const renderRatingFilters = () => (
    <div>
      <h1>Rating</h1>
      <ul>{renderRatingFilteredList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {activeCategoryId, changeCategory} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId

      return (
        <li key={category.categoryId} onClick={onClickCategoryItem}>
          <p>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoriesList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div>
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = props

  return (
    <div>
    {renderSearchInput()}
    {renderProductCategories()}
    {renderRatingFilters()}
    <button type="button" onClick={clearFilters}>
    Clear Filters
    </button>
    </div>
  )
}


export default FiltersGroup
