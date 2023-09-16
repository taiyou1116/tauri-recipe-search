


export default function NavigationbarComponent() {
    return (
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '1rem' }}>
      <h1>マイアプリ</h1>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
          <li><a href="#home" style={{ color: 'white' }}>ホーム</a></li>
          <li><a href="#about" style={{ color: 'white' }}>アバウト</a></li>
          <li><a href="#contact" style={{ color: 'white' }}>コンタクト</a></li>
        </ul>
      </nav>
    </div>
    )
}