import React from 'react';

function SearchBar({ searchTerm, onSearch, results }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <input
        type="text"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={onSearch}
        style={{
          padding: '5px 10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '200px'
        }}
      />
      {searchTerm && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '200px',
          zIndex: 9999,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {results.length > 0 ? (
            results.map((post) => (
              <div key={post.id} style={{
                padding: '8px 10px',
                borderBottom: '1px solid #eee',
                fontSize: '13px'
              }}>
                <strong>{post.title}</strong>
                <p style={{ margin: 0, color: '#666' }}>By {post.author}</p>
              </div>
            ))
          ) : (
            <div style={{ padding: '8px 10px', fontSize: '13px', color: '#666' }}>
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;