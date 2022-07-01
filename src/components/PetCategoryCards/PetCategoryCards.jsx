import './PetCategoryCards.css'

export default function PetCategoryCards() {
  return (
    <>
        <header>
            <h1>Find your new best friend</h1>
            <span>Browse pets from over 11,500 shelters and rescues.</span>
        </header>
        <div className="pet-category-cards">
            <span>Dog</span>
            <span>Cat</span>
            <span>Other Animals</span>
            <span>Shelters and Rescues</span>
        </div>
    </>
  )
}