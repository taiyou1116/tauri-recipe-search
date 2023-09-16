


export default function NavigationbarComponent() {

    function getRecipeFromSearch() {
        
    }

    return (
    <div>
      <h1>Recipe Search</h1>
      <nav>
        <ul>
          <li><a href="#home" style={{ color: 'white' }}>ホーム</a></li>
          <li><a href="#about" style={{ color: 'white' }}>アバウト</a></li>
          <li><a href="#contact" style={{ color: 'white' }}>コンタクト</a></li>
          <li><input type="text" placeholder="search recipe" onChange={() => getRecipeFromSearch()}/></li>
        </ul>
      </nav>
    </div>
    )
}