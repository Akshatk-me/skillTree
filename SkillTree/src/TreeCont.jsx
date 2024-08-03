import React from "react";
import Tree from "./Tree";
import treeData from "./treeData";
import Context from "./Context";

const TreeCont = () => {

    const [allExpand, setAllExpand] = React.useState(false);
    function handleExpand() {
        setAllExpand(!allExpand);
    }
    return (
        <div className="tree-cont">
            <Context.Provider value={{ allExpand, setAllExpand }}>
                <Tree data={treeData}/>
                <div className="right-cont">
                    <button onClick={handleExpand} className="expand-all">{allExpand ? <p>Minimise All</p> : <p>Expand All</p>}</button>
                    <p>This course is offered only for B.Tech and B.S students</p>
                </div>
            </Context.Provider>
        </div>
    );
}

export default TreeCont;