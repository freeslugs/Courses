// Generated by CoffeeScript 1.3.3
"use strict";

var rootCtrl;

rootCtrl = function($scope, Course, Calendar) {
  var calendar;
  calendar = new Calendar;
  $scope.hours = Calendar.hours;
  $scope.days = Calendar.days;
  $scope.semesters = Calendar.getValidSemesters();
  $scope.selectedSemester = $scope.semesters[0];
  $scope.searchResults = [];
  $scope.courseCalendar = calendar.courseCalendar;
  $scope.search = function() {
    return Course.search($scope.searchQuery, $scope.selectedSemester, '10', '1').then(function(data) {
      console.log(data);
      return $scope.searchResults = data;
    });
  };
  $scope.clearResults = function() {
    return $scope.searchResults = [];
  };
  return $scope.courseSelect = function(course) {
    $scope.clearResults();
    return course.getInfo().then(function() {
      if (course.sections.length > 1) {
        return calendar.showAllSections(course);
      }
    });
  };
};
