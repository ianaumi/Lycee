import './CampusStyles.css';

import { Navigation, Pagination, Scrollbar, Ally } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import BuildingCard from './BuildingCard';

import { BuildingData } from './BuildingData';

const Campus = ({ onCardClick }) => {
    return(
        <>
        <div className="campus-wrap">
            <div className="campus-container">
                <div className="heading">
                    <h1>Campus</h1>
                </div>
                <div className="campus-slider">
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
                          slidesPerView: 1,
                        },
                        // when window width is >= 1040px
                        840: {
                          slidesPerView: 2,
                        },
                      }}
                
                    
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='campus-swiper'
                    >
                          {BuildingData.map((item,index) =>{
                            return(
                              <SwiperSlide>
                                <BuildingCard
                                  buildingImg = {item.buildingImg}
                                  title = {item.buildingTitle}
                                  location = {item.buildingLocation}
                                  description = {item.buildingDesc}
                                  buildingName={item.buildingName}
                                  onCardClick={onCardClick}
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

export default Campus;