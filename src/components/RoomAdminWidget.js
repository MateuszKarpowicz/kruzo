function BookingWidget() {
    return (
        <div className="card booking-widget-container bg-dark text-light">
            <div className="card-header">
                <h3>Book a Room</h3>
            </div>
            <div className="card-body">
                <form className="row g-3">
                    <div className="col-md-3">
                        <label htmlFor="checkin" className="form-label">Check-in date:</label>
                        <input type="date" id="checkin" name="checkin" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="checkout" className="form-label">Check-out date:</label>
                        <input type="date" id="checkout" name="checkout" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="adults" className="form-label">Adults:</label>
                        <select id="adults" name="adults" className="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="children" className="form-label">Children:</label>
                        <select id="children" name="children" className="form-select">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-warning w-100 mt-2">Book Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BookingWidget;