import './EventStyles.css';

export default function() {
    return(
        <>
            <div className='event-container'>
                <img src='/'/>
                <h3>Event title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis eros. In a ante quis quam viverra finibus. Curabitur vitae vestibulum lacus. Aenean hendrerit tortor at neque iaculis, eu euismod lacus malesuada.</p>
                <div className='department-info'>
                    <img src='/'/>
                    <h4>Department</h4>
                    <time>MM DD YYYY</time>
                </div>
            </div>
        </>
    )
}