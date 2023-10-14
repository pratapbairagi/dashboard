import "./dashboard.css";
import { ArrowDown, ArrowUp, BoxSeam, CaretDown, CaretRight, CashCoin, ColumnsGap, FileText, Handbag, Nut, PatchCheck, PersonSquare, PiggyBank, QuestionOctagon, Search, Wallet2, XCircle } from "react-bootstrap-icons";
import img from "./images/WhatsApp Image 2023-09-26 at 14.14.19.jpg";
import img1 from "./images/laptop2.jpg";
import img2 from "./images/lime-green-meadows-front-woman-hot-short.webp";
import img3 from "./images/redmi-note-11t-5g.webp";
import img4 from "./images/surprised-girl-pink-culottes-posing-with-trolley-full-multi-colored-packages-with-new-clothes.jpg"
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryPie } from "victory"
import Cards from "./parts/card";

const Dashboard = () => {
    const data = [
        { month: "Jan", earning: 3000 },
        { month: "Feb", earning: 7000 },
        { month: "Mar", earning: 5000 },
        { month: "Apr", earning: 16000 },
        { month: "May", earning: 3000 },
        { month: "jun", earning: 8000 },
        { month: "Jul", earning: 13000 },
        { month: "Aug", earning: 26000 },
        { month: "Sep", earning: 20000 },
        { month: "Oct", earning: 29000 },
        { month: "Nov", earning: 10000 },
        { month: "Dec", earning: 19000 },
    ]

    const products = [
        { title: "Sneaker for men", price: 300, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 20, total_sales: 3456, image: img1 },
        { title: "Shoe for men", price: 700, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 34, total_sales: 2334, image: img2 },
        { title: "Jeans for men", price: 500, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 12, total_sales: 544, image: img3 },
        { title: "Shirt half sleeve", price: 1600, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 43, total_sales: 1234, image: img4 },
        { title: "Kurti for women", price: 300, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 19, total_sales: 7564, image: img1 },
        { title: "T-Shirt for women", price: 800, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 2, total_sales: 3434, image: img2 },
        { title: "Shoe for women", price: 1300, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 6, total_sales: 6746, image: img3 },
        { title: "Short", price: 2600, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 5, total_sales: 2856, image: img4 },
        { title: "Suit set black printed", price: 2000, description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", stock: 4, total_sales: 4735, image: img1 }
    ];

    const cardRecords = [
        { amount: 198, title: "Earning", result: 17.8, inon: PiggyBank, arrows: ArrowUp, colorArrow: "green", iconBg: "rgb(225, 255, 239)", iconColor: "rgb(7, 116, 63)" },
        { amount: 2.4, title: "Orders", result: 31.8, inon: FileText, arrows: ArrowDown, colorArrow: "red", iconBg: "linear-gradient(rgb(216, 171, 216), rgb(224, 215, 224))", iconColor: "purple" },
        { amount: 2.6, title: "Balance", result: 3, inon: Wallet2, arrows: ArrowDown, colorArrow: "red", iconBg: "linear-gradient(skyblue, rgb(212, 233, 241))", iconColor: "teal" },
        { amount: 89, title: "Total Sales", result: 37.9, inon: Handbag, arrows: ArrowUp, colorArrow: "green", iconBg: "linear-gradient(rgb(246, 183, 193), rgb(247, 230, 232))", iconColor: "rgb(214, 88, 103)" }
    ]
    return (
        <div className="container-fluid dasboard-container p-0" style={{ height: "100%", minHeight: "100vh", width: "100%", background: "rgb(4, 4, 64)" }}>
            
            {/* toggle dashboard button : start */}
            <button onClick={(e) => {
                document.querySelector(".col1").classList.add("activeDash");

            }} className="dasboard-toggle-btn p-0" style={{ width: "46px", backgroundColor: "white", aspectRatio: "1/1", borderRadius: "50%", position: "fixed", zIndex: "1", top: "9vh", left: "12px", boxShadow: "0 0 1.5px grey" }}>
                <ColumnsGap color="grey" size="50%" />
            </button>
            {/* toggle dashboard button : end */}

            <div className="row m-0" style={{ minHeight: "100vh", height: "100%", width: "100%" }}>

                <div className="col col-12 col-md-3 col-lg-2 col1 py-4 px-3 m-0" style={{ background: "rgb(4 4 64)", display: "flex", flexDirection: "column", position: "relative" }}>
                    
                    {/* toggle dashboard button : start */}
                    <button
                        onClick={() => {
                            document.querySelector(".col1").classList.remove("activeDash");

                        }} className="d-flex d-md-none" style={{ width: "max-content", aspectRatio: "1/1", justifyContent: "center", alignItems: "center", background: "transparent", marginLeft: "auto", position: "absolute", top: "8px", right: "6px" }} >
                        <XCircle color="white" size="24px" />
                    </button>
                        {/* toggle dashboard button : end */}
                    
                    <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", alignItems: "center", padding: "6px 0 6px 12px" }}>
                        <Nut color="whitesmoke" size="24px" />
                        <h6 className="p-0 m-0" style={{ height: "100%", fontWeight: "600", color: "whitesmoke", lineHeight: "130%" }}>DASHBOARD</h6>
                    </div>

                    <div style={{ height: "70vh", width: "100%" }}>
                        <ul className="px-0 pt-4" style={{ width: "100%" }}>
                            <li>
                                <ColumnsGap color="rgb(184, 177, 177)" />
                                <a href="">Dashboard</a>
                                {/* <CaretRight style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" /> */}
                            </li>
                            <li>
                                <BoxSeam color="rgb(184, 177, 177)" />
                                <a href="">Products</a>
                                <CaretRight style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                            </li>
                            <li>
                                <PersonSquare color="rgb(184, 177, 177)" />
                                <a href="">Customers</a>
                                <CaretRight style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                            </li>
                            <li>
                                <CashCoin color="rgb(184, 177, 177)" />
                                <a href="">Incomes</a>
                                <CaretRight style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                            </li>
                            <li>
                                <PatchCheck color="rgb(184, 177, 177)" />
                                <a href="">Promote</a>
                                <CaretRight style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                            </li>
                            <li>
                                <QuestionOctagon color="rgb(184, 177, 177)" />
                                <a href="">Help</a>
                                <CaretRight style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                            </li>
                        </ul>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "6px 12px", borderRadius: "4px", backgroundColor: "rgb(90, 90, 183)", marginTop: "10px", cursor: "pointer" }}>
                        <img src={img} style={{ width: "28px", borderRadius: "50%" }} alt="" />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "6px" }}>
                            <p className="p-0 m-0" style={{ fontSize: "8px", color: "whitesmoke", textAlign: "left", fontWeight: "600" }}>Pratap</p>
                            <p className="p-0 m-0" style={{ fontSize: "8px", color: "rgb(224, 213, 213)" }}>Project Manager</p>

                        </div>
                        <CaretDown style={{ marginLeft: "auto" }} color="rgb(184, 177, 177)" />
                    </div>

                </div>

                <div className="col col-12 col-md-9 col-lg-10 px-1 py-2" style={{ background: "whitesmoke" }}>
                    <div className="row p-0 m-0">

                        <div className="col col-12 px-2 py-2" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <span className="mt-1" style={{ fontSize: "12px", color: "green", fontWeight: "500" }}>Hello, Pratap Bairagi</span>
                            <fieldset className="px-2 py-2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", background: "white", borderRadius: "4px" }}>
                                <Search color="grey" />
                                <input className="px-2" style={{ fontSize: "10px", color: "grey", marginLeft: "4px" }} type="text" placeholder="search..." />
                            </fieldset>
                        </div>

                        <div className="col px-3 py-2 mt-2" style={{ display: "flex", gap: "20px", maxWidth: "100%", minWidth: "100%", width: "100%", overflowX: "auto" }}>

                            {cardRecords.map((v, i) => {
                                return <Cards key={i} Icon={v.inon} iconBg={v.iconBg} iconColor={v.iconColor} Arrow={v.arrows} colorArrow={v.colorArrow} amount={v.amount} result={v.result} title={v.title} />

                            })}

                        </div>

                    </div>

                    <div className="col p-3 py-2" style={{ height: "max-content" }}>
                        <div className="row m-0 p-0 gap-4">
                            <div className="col col-12 col-md-7 col-lg-7 m-0 py-3" style={{ maxHeight: "70vh", background: "white", borderRadius: "6px" }}>

                                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "14px", fontWeight: "700", color: "black" }}>Overview</span>
                                        <span className="p-0" style={{ fontSize: "8px", fontWeight: "700", color: "grey" }}>Monthly Earning</span>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "2px" }}>
                                        <select style={{ fontSize: "12px", color: "grey", fontWeight: "600", borderRadius: "3px", padding: " 2px 3px", background: "whitesmoke" }} name="" id="">
                                            <option value="1">Per Day</option>
                                            <option value="7">Weekly</option>
                                            <option value="30">Monthly</option>
                                            <option value="90">Quarterly</option>
                                            <option value="180">Half Yearly</option>
                                            <option value="360">Yearly</option>
                                        </select>
                                    </div>
                                </div>

                                {/* <VictoryChart
                                    theme={VictoryTheme.material}
                                    domainPadding={2}
                                    width={600}
                                >
                                    <VictoryAxis
                                        tickValues={[1, 2, 3, 4]}
                                        tickFormat={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}
                                        

                                    />

                                    <VictoryBar
                                        data={data}
                                        x="month"
                                        y="earning"
                                        cornerRadius={10}
                                        style={{
                                            data: {
                                                fill: ({ datum }) => datum._x === 10 ? "rgb(107, 53, 193)" : "rgba(209, 196, 229, 0.769)",
                                                width: "36"
                                            }
                                        }}
                                    />

                                </VictoryChart> */}

                                <div className="row mt-2 m-auto" style={{width:"100%", height:"80%", minHeight:"180px"}}>
                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                        <div style={{width:"70%", margin:"0 auto", height:"44%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Jan</div>
                                    </div>
                                    
                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"54%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Feb</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"33%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Mar</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"48%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Apr</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"55%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>May</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"47%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Jun</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"51%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Jul</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"73%", background:"rgb(107, 53, 193)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Aug</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"67%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Sep</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"36%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Oct</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"53%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Nov</div>
                                    </div>

                                    <div className="col col-1 p-0" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}}>
                                    <div style={{width:"70%", margin:"0 auto", height:"41%", background:"rgba(209, 196, 229, 0.769)", borderRadius:"12px"}}></div>
                                        <div style={{color:"grey", fontSize:"12px", fontWeight:"500", paddingTop:"1vh"}}>Dec</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-12 col-md-4 col-lg-4 m-0 py-3 pb-0" style={{ maxHeight: "70vh", background: "white", borderRadius: "6px" }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                                    <span style={{ fontSize: "14px", fontWeight: "700", color: "black" }}>Customers</span>
                                    <span className="p-0" style={{ fontSize: "8px", fontWeight: "700", color: "grey" }}>Customers that buy products</span>
                                </div>

                                    <div style={{ aspectRatio:"1/1", width:"70%", padding:"1px", background:"white", borderRadius:"50%", boxShadow:"0 0 5px 2px whitesmoke", position:"relative", margin:"20px auto"}}>
                                    <div className="progres" style={{background:`conic-gradient(rgba(209, 196, 229, 0.769) 365deg, white 0)`}} >
                                       <div className="second-progres" style={{background:`conic-gradient(rgb(107, 53, 193) 210deg, transparent 0)`}}>
                                           <div className="third-progres" style={{background:`conic-gradient(rgb(246, 183, 193) 65deg, transparent 0)`}}>
                                                <div className="progres-content">
                                                    <span className="p-0 m-0" style={{fontSize:"32px", fontWeight:"800"}}>65%</span>
                                                    
                                                    <span className="p-0 m-0" style={{fontSize:"14px", fontWeight:"600", maxWidth:"80%", color:"grey", lineHeight:"115%"}}>Total New Customers</span>
                                                </div>
                                           </div>
                                       </div>
                                    </div>
                                    </div>

                                {/* <VictoryPie
                                    padAngle={({ datum }) => datum.y}
                                    innerRadius={100}
                                    colorScale={["red", "green", "yellow", "blue", "grey"]}

                                /> */}
                            </div>

                        </div>
                    </div>


                    <div className="col col-12 p-4" style={{ background: "whitesmoke", marginLeft: "auto" }}>
                        <div className="row p-0">
                            <div className="col py-3" style={{ background: "white", borderRadius: "4px", maxWidth: "100%", overflowX: "auto" }}>

                                <div className="py-2 px-2 gap-3 gap-md-0" style={{ minWidth: "460px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div className="text-center text-md-left" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                        <span style={{ fontSize: "14px", fontWeight: "700", color: "black", whiteSpace: "nowrap" }}>Product Sell</span>
                                    </div>



                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: "2px", gap: "10px" }}>
                                        <fieldset className="px-2 py-1 table-search" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", background: "white", borderRadius: "4px" }}>
                                            <Search color="grey" style={{ background: "transparent" }} />
                                            <input className="px-2" style={{ fontSize: "10px", color: "grey", marginLeft: "4px", background: "transparent" }} type="text" placeholder="search..." />
                                        </fieldset>
                                        <select style={{ fontSize: "12px", color: "grey", fontWeight: "600", borderRadius: "3px", padding: " 4px 3px", background: "whitesmoke" }} name="" id="">
                                            <option value="">Per Day</option>
                                            <option value="">Weekly</option>
                                            <option value="">Monthly</option>
                                            <option value="">Quarterly</option>
                                            <option value="">Half Yearly</option>
                                            <option value="">Yearly</option>
                                        </select>
                                    </div>

                                </div>


                                <table style={{ width: "100%", minWidth: "460px" }}>
                                    <tbody>
                                        <tr style={{ borderBottom: "1px solid grey" }}>
                                            <th style={{ width: "8%", minWidth: "50px" }} >Name</th>
                                            <th style={{ width: "40%" }}></th>

                                            <th style={{ width: "15%" }}>Stock</th>
                                            <th style={{ width: "15%" }}>Price</th>
                                            <th style={{ width: "15%" }}>Total Sales</th>
                                        </tr>
                                        {products.map((v, i) => {
                                            return <tr key={i} style={{ marginTop: "6px" }} >
                                                <td style={{ width: "8%", minWidth: "50px" }} >
                                                    <img src={v.image} style={{ width: "50px", aspectRatio: "1/.6", borderRadius: "4px" }} alt="" />
                                                </td>
                                                <td style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                                    <span style={{ fontWeight: "700", fontSize: "12px" }}>{v.title}</span>
                                                    <span className="p-0" style={{ fontWeight: "500", maxWidth:"100%", display:"-webkit-box", overflow:"hidden", WebkitLineClamp:"1", WebkitBoxOrient:"vertical", color:"rgb(209, 199, 199)" }}>{v.description}</span>
                                                </td>

                                                <td style={{ width: "15%", color:"grey" }}>{v.stock}</td>
                                                <td style={{ width: "15%", fontSize:"11px" }}>$ {v.price}</td>
                                                <td style={{ width: "15%", color:"grey" }}>$ {v.total_sales}</td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default Dashboard;