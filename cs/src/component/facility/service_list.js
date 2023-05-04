export function ServiceList() {
    const facility = [
        {
            "id": 1,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 2,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 3,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 4,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 5,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 6,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 7,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 8,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
        {
            "id": 9,
            "img": "https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
            "nameFacility": "OCEAN SUITE",
            "typeRoom": 3,
            "roomSize": "85.8",
            "price": "300",
            "maxPerson": "6",
            "roomStandard": null,
            "floor": null,
            "poolArea": null,
            "description": null,
            "freeService": 1
        },
    ]
    const typeRoom = [
        {
            "id": 1,
            "name": "Villa"
        },
        {
            "id": 2,
            "name": "House"
        },
        {
            "id": 3,
            "name": "Room"
        }
    ]

    return (
        <>
            <div className="container-fluid">
                <div>
                    <img
                        src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                        width="100%"
                    />
                    <div className="vc_empty_space" style={{height: 72}}>
                        <span className="vc_empty_space_inner"/>
                    </div>
                    <a href="create.html" className="btn btn-primary btn-sm">
                        Thêm mới dịch vụ
                    </a>
                    <div className="row room-grid">
                        {facility.map((facility, index) => (
                            <div
                                key={index}
                                className="text-center pt-4 col-sm-6 col-lg-4"
                            >
                                <div className="card" style={{width: "30rem"}}>
                                    <img
                                        src={facility.img}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{facility.nameFacility}</h5>
                                        <h5 className="card-title">{facility.roomSize}</h5>
                                    </div>
                                    <div className="card-footer text-center">
                                        <a href="update.html" className="btn btn-primary btn-sm">
                                            Sửa
                                        </a>
                                        <a
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            data-toggle="modal"
                                            data-target="#modelId"
                                        >
                                            Xoá
                                        </a>
                                    </div>
                                </div>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}