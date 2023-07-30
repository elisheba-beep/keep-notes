import PropTypes from 'prop-types'
import Button from "./Button"


const Header = ({title, onAdd, showAdd}) => {
   
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onAdd}text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'steelblue'}/>

    </header>
  )
}

Header.prototypes = {
    title: PropTypes.string.isRequired,
}

export default Header