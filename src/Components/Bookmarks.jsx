import React from 'react';
import Cards from "@/Components/Cards";
function Bookmarks(props) {
    return (
        <>
        <div className='mt-36 py-10 px-28'>
        <h1 className='font-bold text-[2rem]'>My Bookmarks</h1>    
        <div className='flex gap-10 py-10 flex-wrap'>
<Cards image="https://images.hipdf.com/images2022/icons/Crop-PDF.svg" title="Crop PDF" description="Crop PDF online to a selected area, and adjust margin size swiftly."/>
<Cards image="https://images.hipdf.com/images2022/icons/editPDF.svg" title="Edit PDF" description="Use the best online PDF editor to edit PDFs in your browser."/>
<Cards image="https://images.hipdf.com/images2022/icons/compress-pdf.svg" title="Compress PDF" description="The easiest way to reduce PDF size online."/>
<Cards image="https://images.hipdf.com/images2022/icons/replace-text-pdf.svg" title="Replace Text" description="The easiest way to replace text online."/>

        </div>
        </div>
        </>
    );
}

export default Bookmarks;