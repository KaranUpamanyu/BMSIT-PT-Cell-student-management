//jshint esversion:6

var select = function  (con,req,res) {

  var personal_information = "select usn, full_name, mobile_number, emergency_contact, permanent_contact, primary_email, alternate_email, passport, foreign_languages, first_name, middle_name, last_name, permanent_address, permanent_city, permanent_postal, permanent_contact,current_address, current_city, current_postal from ug";

  var education = "select usn, full_name, cgpa_be, backlog_count, backlog_subjects from ug";

  var offers = "select usn, full_name, internship, internship_stipend, company1, company1_jd, company1_ctc, company2, company2_jd, company2_ctc, next_offer_ctc from ug";

  var send_info_tables = "select usn, full_name, branch, gender, mobile_number, primary_email, cgpa_be from ug;";

  var sql = "select * from ug";

  var viewMode = '0';
  // var searchParams = [0,10];


  if (req.query) {
    switch (req.query.select_mode) {
      case '1': sql = personal_information;
                viewMode = '1';
                // searchParams = [0,1];
                break;
      case '2': sql = education;
                viewMode = '2';
                // searchParams = [];
                break;
      case '3': sql = offers;
                viewMode = '3';
                // searchParams = [];
                break;
      case '4': sql = send_info_tables;
                viewMode = '4';
                // searchParams = [];
                break;
    }
  }

  con.query(sql, function (err, rows, fields) {
    if (err) throw err;
    // console.log(rows);
    res.render('dash',{
    // res.render('admin',{
      rows: rows,
      viewMode: viewMode,
      // searchParams: searchParams
    });
  });

};

module.exports = select;
