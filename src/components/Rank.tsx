import React, { useEffect, useState } from 'react'
import api from '../axios/config';

const Rank = () => {
	const [rankAtual, setRankAtual] = useState([]);

  const getRankAtual = async () => {
    try {
      const response = await api.get(
        "/competitivetiers?language=pt-BR"
      );
      const data = response.data;
	  //console.log(data.data[0].tiers)
	  const data_filter = data.data[0].tiers.filter(filter_ranks);
      setRankAtual(data_filter);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRankAtual();
  }, []);

  function filter_ranks(props: any) {
    if (props.smallIcon !== null) {
      return props;
    }
  }


  return (
	<>
	{rankAtual.length === 0 ? (
        <p>Carregando...</p>
      ) : (
	<div className="bg-vava py-16">
      <div className="text-center font-raj font-bold md:text-8xl text-6xl">
        RANKS
      </div>

	  <div className='md:flex md:flex-row md:flex-wrap grid sm:grid-cols-3 grid-cols-2 justify-center gap-4 py-10 md:px-10'>
		{rankAtual.map((rank, index)=>(
			<div key={index}>
				<img src={rank.largeIcon} />
				<p className='text-2xl text-center p-10 text-black font-fira'>{rank.divisionName}</p>
			</div>
		))}
	  </div>
      
    </div>
	  )}
	  </>
  )
}

export default Rank