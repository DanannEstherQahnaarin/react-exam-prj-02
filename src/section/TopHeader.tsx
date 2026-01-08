import * as Box from "@components/Containers";

export default function TopHeader(){
    return (
        <Box.TopNaviHeaderBox>
          <div className="logo">logo</div>
          <Box.GridBox count={4} size={1} column_gap={10} row_gap={5}>
            <div>m1</div>
            <div>m2</div>
            <div>m3</div>
            <div>m4</div>
          </Box.GridBox>
        </Box.TopNaviHeaderBox>        
    );
}