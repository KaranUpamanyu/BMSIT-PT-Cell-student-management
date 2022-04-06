//jshint esversion:6

var update = function  (con,req,res) {
  var edit_value = req.body.edit_value;
  console.log(edit_value);
  var edit_field_usn = req.body.edit_field_usn;
  console.log(edit_field_usn);
  var is_num = true;
  var sql;
  var viewMode = req.body.viewMode;
  console.log(viewMode + " mode from update");
  var field_usn = edit_field_usn.split(' ');


  if (field_usn[0] == "full_name" ||field_usn[0] == "aspiration"  || field_usn[0] == "mode_of_admission"  || field_usn[0] == "backlog_subjects"  || field_usn[0] == "gender"  || field_usn[0] == "dob"  || field_usn[0] == "nationality"  || field_usn[0] == "hometown_name"  || field_usn[0] == "primary_email"  || field_usn[0] == "mobile_number"  || field_usn[0] == "first_name"  || field_usn[0] == "middle_name"  || field_usn[0] == "last_name"  || field_usn[0] == "college_email"  || field_usn[0] == "alternate_email"  || field_usn[0] == "emergency_contact"  || field_usn[0] == "fathers_name"  || field_usn[0] == "occupation_father"  || field_usn[0] == "mothers_name"  || field_usn[0] == "occupation_mother"  || field_usn[0] == "puc_12_diploma"  || field_usn[0] == "board_10"  || field_usn[0] == "board_12" || field_usn[0] == "link_10"  || field_usn[0] == "link_12"  || field_usn[0] == "permanent_address"  || field_usn[0] == "permanent_city"  || field_usn[0] == "permanent_postal"  || field_usn[0] == "permanent_contact"  || field_usn[0] == "current_address"  || field_usn[0] == "current_city"  || field_usn[0] == "current_postal"  || field_usn[0] == "internship_organization"  || field_usn[0] == "internship_start_date"  || field_usn[0] == "internship_end_date"  || field_usn[0] == "internship_skills"  || field_usn[0] == "certification_skills"  || field_usn[0] == "certificate_vendor"  || field_usn[0] == "link_undertaking" || field_usn[0] == "link_sgpa_cgpa"  || field_usn[0] == "link_resume"  || field_usn[0] == "link_linkedin"  || field_usn[0] == "link_pan"  || field_usn[0] == "link_aadhar"  || field_usn[0] == "link_photo"  || field_usn[0] == "passport"  || field_usn[0] == "foreign_languages") is_num = false;

  if (is_num || edit_value=="NULL")
    sql = "update ug set " + field_usn[0] + "=" + edit_value + " where usn='" + field_usn[1] + "'";
  else
    sql = "update ug set " + field_usn[0] + "='" + edit_value + "' where usn='" + field_usn[1] + "'";

  con.query(sql, function (err, rows, fields) {
    if (err) throw err;
  });

  var personal_information = "select usn, full_name, mobile_number, emergency_contact, permanent_contact primary_email, alternate_email, passport, foreign_languages, first_name, middle_name, last_name, permanent_address, permanent_city, permanent_postal, permanent_contact,current_address, current_city, current_postal from ug";

  var education = "select usn, full_name, cgpa_be, backlog_count, backlog_subjects from ug";

  var offers = "select usn, full_name, internship, internship_stipend, company1, company1_jd, company1_ctc, company2, company2_jd, company2_ctc, next_offer_ctc from ug";

  var sql = "select * from ug";

  switch (viewMode) {
    case '1': sql = personal_information;
              // searchParams = [0,1];
              break;
    case '2': sql = education;
              // searchParams = [];
              break;
    case '3': sql = offers;
              // searchParams = [];
              break;
    case '4': sql = send_info_tables;
              // searchParams = [];
              break;
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

module.exports = update;
