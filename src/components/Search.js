import React, { Component } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
class Search extends Component {
    constructor() {
        super();
        this.state = {
             val : '' ,
             books:[]
            };
        this.searchBook = this.searchBook.bind(this)
    }

    componentDidMount(){
        this.setState({
            books:this.props.book
        })
    }
       

    searchBook(event){
        this.setState({
            val: event.target.value
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
    ss(){
        return(
            <div className="bookshelf">
        <div className="bookshelf-books">
            <ol className="books-grid">
    
                {this.state.books.filter(book => book.title.indexOf(this.state.val) !=-1).map((book) => 
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

  render() {
    return (
      <div>
        <div className="search-books">
		            <div className="search-books-bar">
		            	<Link to="/" className="close-search">Close</Link>
		            	
			            	<form className="search-books-input-wrapper" >
								<input
                                    type="text" 
                                    name="val"
									placeholder="Search Book"
									value={this.state.value}
                                     onChange={this.searchBook}
                                  
								/>
				         		
			              	</form>
                              
		              	
		            </div>
                   
		           
	          	</div>
                  <br /><br />
                  {this.ss()}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        book: state.TotalBooks,
    };
}

export default connect(mapStateToProps)(Search)
