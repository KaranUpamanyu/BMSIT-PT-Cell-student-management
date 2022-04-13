//jshint esversion:6

var insert = function  (con,req,res) {

  let usn = req.body.usn,
  full_name = req.body.full_name,
  branch = req.body.branch,
  aspiration = req.body.aspiration,
  mode_of_admission = req.body.mode_of_admission,
  percentage_10 = req.body.percentage_10,
  percentage_12 = req.body.percentage_12,
  cgpa_be = req.body.cgpa_be,
  backlog_count = req.body.backlog_count,
  backlog_subjects = req.body.backlog_subjects,
  gap_in_education = req.body.gap_in_education,
  gender = req.body.gender,
  dob = req.body.dob,
  nationality = req.body.nationality,
  hometown_name = req.body.hometown_name,
  primary_email = req.body.primary_email,
  mobile_number = req.body.mobile_number,
  first_name = req.body.first_name,
  middle_name = req.body.middle_name,
  last_name = req.body.last_name,
  college_email = req.body.college_email,
  alternate_email = req.body.alternate_email,
  emergency_contact = req.body.emergency_contact,
  fathers_name = req.body.fathers_name,
  occupation_father = req.body.occupation_father,
  mothers_name = req.body.mothers_name,
  occupation_mother = req.body.occupation_mother,
  puc_12_diploma = req.body.puc_12_diploma,
  pass_year_10 = req.body.pass_year_10,
  pass_year_12 = req.body.pass_year_12,
  board_10 = req.body.board_10,
  board_12 = req.body.board_12,
  link_10 = req.body.link_10,
  link_12 = req.body.link_12,
  permanent_address = req.body.permanent_city,
  permanent_city = req.body.permanent_city,
  permanent_postal = req.body.permanent_postal,
  permanent_contact = req.body.permanent_contact,
  current_address = req.body.current_address,
  current_city = req.body.current_city,
  current_postal = req.body.current_postal,
  cet_comedk_rank = req.body.cet_comedk_rank,
  internship_done = req.body.internship_done,
  internship_organization = req.body.internship_organization,
  internship_duration_weeks = req.body.internship_duration_weeks,
  internship_start_date = req.body.internship_start_date,
  internship_end_date = req.body.internship_end_date,
  internship_skills = req.body.internship_skills,
  certification_skills = req.body.certification_skills,
  certification_duration_weeks = req.body.certification_duration_weeks,
  certificate_vendor = req.body.certificate_vendor,
  link_undertaking = req.body.link_undertaking,
  link_sgpa_cgpa = req.body.link_sgpa_cgpa,
  link_resume = req.body.link_resume,
  link_linkedin = req.body.link_linkedin,
  link_pan = req.body.link_pan,
  link_aadhar = req.body.link_aadhar,
  link_photo = req.body.link_photo,
  passport = req.body.passport,
  foreign_languages = req.body.foreign_languages;
  //eligibility
  //debar
  //intern
  //stipend
  //company1
  //company1_jd
  //company1_ctc
  //company2
  //company2_jd
  //company2_ctc
  //next_offer_ctc

  if (middle_name == "") middle_name = "NULL";
  else middle_name = "'" + middle_name + "'";

  if (last_name == "") last_name = "NULL";
  else last_name = "'" + last_name + "'";

  if (backlog_subjects == "") backlog_subjects = "NULL";
  else backlog_subjects = "'" + backlog_subjects + "'";

  if (foreign_languages == "") foreign_languages = "NULL";
  else foreign_languages = "'" + foreign_languages + "'";

  if (passport == "") passport = "NULL";
  else passport = "'" + passport + "'";

  if (internship_organization == "") internship_organization = "NULL";
  else internship_organization = "'" + internship_organization + "'";

  if (internship_duration_weeks == "") internship_duration_weeks = "0";

  if (internship_end_date == "") internship_end_date = "1800-01-01";

  if (internship_start_date == "") internship_start_date = "1800-01-01";

  if (internship_skills == "") internship_skills = "NULL";
  else internship_skills = "'" + internship_skills + "'";

  if (certification_skills == "") certification_skills = "NULL";
  else certification_skills = "'" + certification_skills + "'";

  if (certification_duration_weeks == "") certification_duration_weeks = "0";

  if (certificate_vendor == "") certificate_vendor = "NULL";
  else certificate_vendor = "'" + certificate_vendor + "'";


  var error_exist = false;

  //DON'T CHANGE BELOW CODE (FOR NOW)
  var sql = "insert into ug values ('"+usn+"', '"+full_name+"', '"+branch+"', '"+aspiration+"', '"+mode_of_admission+"', "+percentage_10+", "+percentage_12+", "+cgpa_be+", "+backlog_count+", '"+backlog_subjects+"', "+gap_in_education+", '"+gender+"', '"+dob+"', '"+nationality+"', '"+hometown_name+"', '"+primary_email+"', '"+mobile_number+"', '"+first_name+"', "+middle_name+", "+last_name+", '"+college_email+"', '"+alternate_email+"', '"+emergency_contact+"', '"+fathers_name+"', '"+occupation_father+"', '"+mothers_name+"', '"+occupation_mother+"', '"+puc_12_diploma+"', "+pass_year_10+", "+pass_year_12+", '"+board_10+"', '"+board_12+"', '"+link_10+"', '"+link_12+"', '"+permanent_address+"', '"+permanent_city+"', '"+permanent_postal+"', '"+permanent_contact+"', '"+current_address+"', '"+current_city+"', '"+current_postal+"', '"+cet_comedk_rank+"', '"+link_undertaking+"', '"+link_sgpa_cgpa+"', '"+link_resume+"', '"+link_linkedin+"', '"+link_pan+"', '"+link_aadhar+"', '"+link_photo+"', "+passport+", "+foreign_languages+", null, false, null, null, null, null, null, null, null, null, 0)";




  con.query(sql, function (err, result) {
    try{
      if (err) throw(err);
    }catch(ex) {
      console.error(ex,ex.stack);
      error_exist = true;
      res.render('error',{
        error: ex.sqlMessage,
      });
      return;
    }finally {
      if(!error_exist && (internship_done=='FALSE'||internship_done=='false'||internship_done=='False'||internship_done=='1')) {
        // console.log("no internship, inserted");
        res.render('success');
      }
    }
  });




  if(internship_done=='TRUE'||internship_done=='true'||internship_done=='True'||internship_done=='1'){
    var sql = "insert into ug_internship values ('"+usn+"', "+internship_organization+", "+internship_duration_weeks+", '"+internship_start_date+"', '"+internship_end_date+"', "+internship_skills+");";
    con.query(sql, function (err, result) {
      try{
        if (err) throw(err);
      }catch(ex) {
        console.error(ex,ex.stack);
        error_exist = true;
        con.query("delete from ug where usn = '"+usn+"';", function (myerror, resultt){if (myerror) throw (myerror);});
        res.render('error',{
          error: ex.sqlMessage,
        });
        return;
      }finally {
        if (!error_exist) {
          // console.log("inserted with internship");
          res.render('success');
        }
      }
    });
  }

};



module.exports = insert;



/*

"+internship_done+", "+internship_organization+", "+internship_duration_weeks+", '"+internship_start_date+"', '"+internship_end_date+"', "+internship_skills+", "+certification_skills+", "+certification_duration_weeks+", "+certificate_vendor+",

*/
