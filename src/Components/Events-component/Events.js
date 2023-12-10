import './EventStyles.css';

import { Navigation, Pagination, Scrollbar, Ally } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import EventCard from './Event-card';

import { EventData } from './EventData';

export default function() {
    return(
        <>
        <div className="event-wrap">
            <div className="event-container">
                <h1>Upcoming Events</h1>
                <div className="event-slider">
                  <Swiper
                      modules={[Navigation, Pagination, Scrollbar]}
                      spaceBetween={50}
                      slidesPerView={2}
                      navigation={true}
                      pagination={true}
                      breakpoints={{
                          // when window width is >= 340px
                          340: {
                            slidesPerView: 1,
                          },
                          // when window width is >= 840px
                          840: {
                            slidesPerView: 2,
                          },
                          // when window width is >= 1040px
                          959: {
                            slidesPerView: 3,
                          },
                        }}
                  
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      className='campus-swiper'
                      >
                        {EventData.map((item,index) => {
                          return(
                            <SwiperSlide key = {index}>
                              <EventCard
                                eventImg = {item.eventImg}
                                eventName = {item.eventName}
                                eventDescription = {item.eventDesc}
                                departmentLogo = {item.departmentLogo}
                                departmentName = {item.departmentName}
                                eventDate = {item.eventDate}
                              />
                            </SwiperSlide>   
                          )
                        })}
                  </Swiper>
                </div>
            </div>
        </div>
        </>
    )
}