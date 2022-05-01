import PropTypes from 'prop-types';
import ToggleButton from './ToggleButton';

function Header({title, setShowTask, showTask, }) {
    const onToggle = () => {
        setShowTask(showTask = !showTask)
        console.log(showTask)
    }

    return (
        <div>
            <h1>{title}</h1>
            <span>Get things done, one item at a time.</span>
    
            <ToggleButton
                label="Want to add a task?"
                labelOff="Close form?"
                onToggle={onToggle} 
                name="any"
                isActive={showTask} 
            />
        </div>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header