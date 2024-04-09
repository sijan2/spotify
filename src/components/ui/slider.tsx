const Slider = () => {
  return (
    <div className='w-full gap-2 flex flex-row justify-between items-center'>
      {/* current time stamp div format like typical music player 00:00 */}
      <div className='font-sptitle text-xs min-w-10 text-right text-[#a7a7a7]'>
        0:00
      </div>
      {/* slider div */}
      <div className='h-3 relative w-full'>
        <label className='border-0 h-[1px] w-[1px] m-[-1px] p-0 overflow-hidden absolute'></label>
        {/* progress bar */}
        <div className='h-full w-full  overflow-hidden'>
          <div className='rounded-[2px] h-1 w-full flex absolute top-[50%] translate-y-[-50%] bg-brand-300'>
            {/* slider foreground this should be on top of progress bar which transform on x axis upon draging on top  */}
            <div className='overflow-hidden w-full rounded-[2px] h-1'>
              <div className=' rounded-[2px] h-1 w-full will-change-transform translate-x-[0%]'></div>
            </div>
            <div className='hidden cursor-pointer absolute bg-white  rounded-[50%] h-3 ml-[-6px] will-change-[left] z-[100] left-[30%] translate-y-[-50%] w-3 top-[50%] shadow-md'></div>
          </div>
          {/* slider pointer */}
        </div>
      </div>
      {/* total time stamp div fromat like 00:00 */}
      <div className='font-sptitle text-xs min-w-10 text-left text-[#a7a7a7] '>
        4:19
      </div>
    </div>
  );
};

export default Slider;
