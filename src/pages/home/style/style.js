import styled from 'styled-components'

export const HomeWrapper = styled.div`
  over-flow: hidden; 
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  margin-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  color: #000;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 18px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
`