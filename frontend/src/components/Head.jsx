import { Link } from 'react-router-dom';

export default function Head() {
  const linkStyle = {
    textDecoration: 'none',
    color: '#50b7fc',
  };
  return (
    <nav>
      <div className='logo'>
        <Link to={'/'} style={linkStyle}>
          <h2>Note App</h2>
        </Link>
      </div>
      <div className='action'>
        <button>Logout</button>
      </div>
    </nav>
  );
}
