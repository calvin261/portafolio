function Sidebar({data}) {
  console.log('sidebar', data)
  return (
    <div className="w-full md:w-4/5 ">
      <aside className="w-full md:w-1/5 bg-gray-100">
        <img src={data.avatar_url} alt="mi foto" />
        <p className="text-3xl font-semibold">{data.name}</p>
        <p className="text-xl font-semibold">{data.bio}</p>
      </aside>
    </div>
  );
}
export default Sidebar;
