import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Detail from "../json/details.json"
import { FaCircleArrowLeft } from "react-icons/fa6";
import ScrollArrow from '../components/ScrollArrow'

const DestAllPlaces = () => {
    const navigate = useNavigate()
    const { name } = useParams()
    const DistrictName = ["ariyalur", "chengalpattu", "chennai", "coimbatore", "cuddalore", "dharmapuri", "dindigal", "erode", "kallakurichi", "kanchipuram", "kanniyakumari", "karur", "krishnagiri", "madurai", "mayiladuthurai", "nagapattinam", "namakkal", "nilgiris", "perambalur", "pudukkottai", "ramanathapuram", "ranipet", "salem", "sivagangai", "tenkasi", "thanjavur", "theni", "thirunelveli", "thirupathur", "thiruppur", "thiruvallur", "thiruvannamalai", "thiruvarur", "trichy", "tuticorin", "vellore", "vilupuram", "virudhunagar", "pondicherry"]
    let index = DistrictName.findIndex(item => item === name);
    let data = Detail.districtPlaces[index];

    const navigateToPlace=(place)=>{
        navigate(`/destination/${name}/${place.trim().replaceAll(" ","_").toLowerCase()}`)
    }
    useEffect(()=>{
        window.scroll(0,0)
    },[])

    return (
        <section>
            <div className='btn btn-primary' style={{ position: 'fixed', zIndex: 1000 }} onClick={() => { navigate(`/destination/${name}`) }}><FaCircleArrowLeft size={20} color='white' /></div>
            <div class="container-fluid">
                <h2 id="attracth2">{data[0].title}</h2>


                <div class="cards-container">


                    {
                        data.map((item, index) => {
                            return (
                                <div class="attraction-card" onClick={()=>navigateToPlace(item.attractPara)} >
                                    <img loading="lazy" src={item.image} alt={item.attractPara} class="place-image" />
                                    <p class="place-description">{item.attractPara}</p>
                                    <p class="place-text">{item.attractText}</p>
                                </div>
                            )
                        })
                    }


                </div>

                <div class="mt-5">
                </div>
            </div>
            <ScrollArrow/>

        </section>
    )
}

export default DestAllPlaces