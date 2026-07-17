
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";

export const categories=[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline  className="text-green-500 w-[60px] h-[60px]"/>
    },
    {
         id:2,
        name:"BreakFast",
        icon:<MdOutlineFreeBreakfast className="text-green-500 w-[60px] h-[60px]"/>

    },
    {
         id:3,
        name:"Soups",
        icon:<LuSoup className="text-green-500 w-[60px] h-[60px]"/>

    },
    {
         id:4,
        name:"Pasta",
        icon:<CiBowlNoodles className="text-green-500 w-[60px] h-[60px]"/>

    },
    {
         id:5,
        name:"Main_course",
        icon:<MdOutlineFoodBank className="text-green-500 w-[60px] h-[60px]"/>

    },
    {
         id:6,
        name:"Pizza",
        icon:<GiFullPizza  className="text-green-500 w-[60px] h-[60px]" />

    },
    {
         id:7,
        name:"Burger",
        icon:<GiHamburger className="text-green-500 w-[60px] h-[60px]"/>

    }
]