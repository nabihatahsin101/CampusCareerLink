<!DOCTYPE html>
<html>
<head>
    <title>New Job Posted</title>
</head>
<body>
    <h2>Hello,</h2>
    <p>A new job circular has been posted on <b>CampusCareerLink</b> 🎉</p>

    <p><b>Title:</b> {{ $job->title }}</p>
    <p><b>Department:</b> {{ $job->department }}</p>
    <p><b>Deadline:</b> {{ $job->deadline }}</p>

    <p>Apply now before the deadline!</p>
    <a href="{{ url('/jobs/' . $job->id) }}" 
       style="display:inline-block;padding:10px 15px;background:#4CAF50;color:#fff;text-decoration:none;border-radius:5px;">
       View Job Details
    </a>

    <br><br>
    <p>Regards,<br>CampusCareerLink Team</p>
</body>
</html>
