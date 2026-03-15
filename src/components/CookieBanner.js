function CookieBanner({ onAccept }) {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#222',
      color: '#fff',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 9998,
      boxSizing: 'border-box'
    }}>
      <p style={{ margin: 0, fontSize: '14px' }}>
        🍪 This website uses cookies to improve your experience. By continuing to use this site you accept our use of cookies.
      </p>
      <button
        onClick={onAccept}
        style={{
          backgroundColor: '#EE802F',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginLeft: '20px',
          whiteSpace: 'nowrap'
        }}
      >
        Accept Cookies
      </button>
    </div>
  );
}

export default CookieBanner;