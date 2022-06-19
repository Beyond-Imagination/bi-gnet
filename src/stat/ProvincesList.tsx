import React from 'react';
import styled from "@emotion/styled";


interface ProvincesListProps {
    provinces: string[],
    selectedProvince: string,
}

const ProvincesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

const ProvincesBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: #ABABAB 1px solid;
  margin-bottom: 12px;
  margin-right: 12px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background: #EFEFEF;
    transition: 0.5s;
  }
`

const ProvincesList: React.FC<ProvincesListProps> = ({selectedProvince, provinces}) => {

    return (
        <>
            <h3>다른 시도 현황 보기</h3>
            <ProvincesWrapper>
                {provinces.filter(value => value != selectedProvince).map(value =>
                    <ProvincesBox>{value}</ProvincesBox>)}
            </ProvincesWrapper>
        </>
    )
}


export default ProvincesList;
