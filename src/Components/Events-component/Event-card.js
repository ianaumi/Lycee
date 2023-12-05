import './EventCardStyles.css';

export default function() {
    return(
        <>
            <div className='event-container'>
                <div className='event-img'>
                    <img src='https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg'/>
                </div>
                <div className='event-content'>
                    <h3>Event title</h3>
                    <div className='event-info'>
                        <div className='logo'>
                            <img src='https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'/>
                        </div>
                        <h4>Department</h4>
                        <time>MM DD YYYY</time>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis eros. In a ante quis quam viverra finibus. Curabitur vitae vestibulum lacus. Aenean hendrerit tortor at neque iaculis, eu euismod lacus malesuada.</p>
                </div>
            </div>
        </>
    )
}