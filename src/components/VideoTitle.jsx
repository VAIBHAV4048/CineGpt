const VideoTitle = ({ title, overview}) => {

return (
<div className="w-1/2 flex flex-col gap-3 p-16">
    <h1 className="text-3xl font-medium text-[#232323]">
        {title}
    </h1>
    <p>
        {overview}
    </p>
    <div className="flex gap-4">
    <button className="rounded-sm py-2 px-6 cursor-pointer text-lg bg-[#7D08DD] hover:bg-[#7207C9] text-white">Play</button>
    <button className="rounded-sm py-2 px-4 cursor-pointer text-lg border-1 border-[#7D08DD]  text-[#232323]" >More info</button>
    </div>
</div>
);

};
export default VideoTitle;
