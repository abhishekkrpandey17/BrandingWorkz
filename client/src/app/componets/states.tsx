const Stats = () => {
    return (
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">100+</h3>
            <p className="text-gray-700 mt-2">Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">150+</h3>
            <p className="text-gray-700 mt-2">Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">25+</h3>
            <p className="text-gray-700 mt-2">Industries</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-600">95%</h3>
            <p className="text-gray-700 mt-2">Client Retention</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Stats;
  