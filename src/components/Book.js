import React from 'react'
import '../App.css'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
const User = (params) => {
    return ( <h1> Welcome User {params.username} </h1>)
  }

class Book extends React.Component {

 state={
    type:"",
    books:[]
 }

 componentDidMount(){
     this.setState({
         books:this.props.book
     })
    
 }
 changeShelf = (bo,event) => {
    console.log(event.target.value)
    console.log(bo)
    const index = this.state.books.findIndex((b) =>{
        return b.id === bo.id;
      })
  
      const book= Object.assign({},this.state.books[index])
      book.shelf = event.target.value
  
      const books=Object.assign([],this.state.books)
      books[index]=book
  
      this.setState({books:books})
   
  }

  

cr(){
    return(
        <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
        <ol className="books-grid">

            {this.state.books.filter(book => book.shelf === 'currentlyReading').map((book) => 
                   <div className="book">
                   <div className="book-top">
                   <div className="book-cover" key={book.id} style={{ backgroundImage: `url(${book.thumbnail})`}} alt="book cover"></div>
                     <div className="book-shelf-changer">
                       <select onChange={(e)=> this.changeShelf(book,e)} defaultValue={book.shelf}>
                         <option value="none" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title" key={book.title}>{book.title}</div>
                   <div className="book-authors" key={book.authors}>{book.authors}</div>
                 </div>
                
            )}
            
        </ol>
    </div>
</div>
    )
}

wr(){
    return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">WantToRead</h2>
    <div className="bookshelf-books">
        <ol className="books-grid">

            {this.state.books.filter(book => book.shelf === 'wantToRead').map((book) => 
                   <div className="book">
                   <div className="book-top">
                   <div className="book-cover" key={book.id} style={{ backgroundImage: `url(${book.thumbnail})`}} alt="book cover"></div>
                     <div className="book-shelf-changer">
                       <select onChange={(e)=> this.changeShelf(book,e)} defaultValue={book.shelf}>
                         <option value="none" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title" key={book.title}>{book.title}</div>
                   <div className="book-authors" key={book.authors}>{book.authors}</div>
                 </div>
                
            )}
            
        </ol>
    </div>
</div>
    )
}
 
re(){
    return(
        <div className="bookshelf">
    <h2 className="bookshelf-title">Read</h2>
    <div className="bookshelf-books">
        <ol className="books-grid">

            {this.state.books.filter(book => book.shelf === 'read').map((book) => 
                   <div className="book">
                   <div className="book-top">
                   <div className="book-cover" key={book.id} style={{ backgroundImage: `url(${book.thumbnail})`}} alt="book cover"></div>
                     <div className="book-shelf-changer">
                       <select onChange={(e)=> this.changeShelf(book,e)} defaultValue={book.shelf}>
                         <option value="none" disabled>Move to...</option>
                         <option value="currentlyReading">Currently Reading</option>
                         <option value="wantToRead">Want to Read</option>
                         <option value="read">Read</option>
                         <option value="none">None</option>
                       </select>
                     </div>
                   </div>
                   <div className="book-title" key={book.title}>{book.title}</div>
                   <div className="book-authors" key={book.authors}>{book.authors}</div>
                 </div>
                
            )}
            
        </ol>
    </div>
</div>
    )
}
 
render(){ console.log(this.state.books)
		return(
            <div>
            {this.cr()}
            {this.wr()}
            {this.re()}
            
            <div className="open-search">     
            <Link to="/search" exact strict >Add a book</Link>

            </div>

            </div>
	      
		)
	}
}

function mapStateToProps(state) {
    return {
        book: state.TotalBooks,
    };
}


export default connect(mapStateToProps)(Book)