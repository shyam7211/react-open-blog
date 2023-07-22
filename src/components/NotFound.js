const NotFound = () => {
    document.body.style.backgroundColor = '#fffdfd71';
    
    return ( 
        <div className="not-found">
            <h2>Not Found</h2>
            <p>The page does not found</p>
            <a href='/' >Back to Home</a>
        </div>
     );
}
 
export default NotFound;