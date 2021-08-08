import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function ChapterChildren(props){
    const [pageNum, setPage] = useState(0);
    const lastPage = [3]
    const childrenNum = props.state.statusChildrenNum;

    const setPluralChildren = (num) => {
        if(num===1){
            return "child";
        }else{
            return "children";
        }
    }

    const images=[]

    const pages = [
        //p0
        <>
            At this point, you have never been in a serious relationship.
        </>,
        //p1
        <>
            However, you have always wanted to have children, regardless of whether you have a partner to raise them with.
        </>,
        //p2
        <>
            You decide to adopt {childrenNum} {setPluralChildren(childrenNum)} and raise them as a single parent.
        </>,
        //p3
        <>
            It is not easy to be on your own, but you don't feel lonely. Having your own {setPluralChildren(childrenNum)} is the best decision you have made in your life.
        </>
    ]

    return(
        <div class="main">
            <div class="image">
                {images[pageNum]}
            </div>

            <div class="dialog">
                <div class="dialog-next">

                    {lastPage.includes(pageNum)?
                        <button onClick={() => {props.flipChapter("chapter3")}} class="button-next">
                            <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                        </button>
                    :
                    <>
                        <button onClick={() => {setPage(pageNum + 1)}} class="button-next">
                            <FontAwesomeIcon icon={ faAngleRight } size="2x"/>
                        </button>
                    </>
                    }
                </div>

                {pages[pageNum]}

            </div>
        </div>
    );
}