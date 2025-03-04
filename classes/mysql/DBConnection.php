<?php
/**
* Programmer    : Nitin
* Module 	: Database Connection
* File Name 	: DBConnection.php
* Description 	: Database Connection Class
* Versions 	: PHP5, Apache 2.0 
* Last Modified : 23/08/2006
*/

class DBConnection {    

	var $connection, $statement, $dbQuery, $dbResult;

	// ///////////////////////////////////////////////////// //
	// PHP and MySQL Connection and Error Specific methods
	// ///////////////////////////////////////////////////// //
    
	function __construct()
	{
		//try {
			$dbUsername = MYSQL_DB_USER;
			$dbPassword = MYSQL_DB_PWD;
			$dbServer = MYSQL_DB_SERVER;
			$dbName = MYSQL_DB_NAME;

			$connection = mysqli_connect($dbServer, $dbUsername, $dbPassword);

			if(!$connection) {
			    $this->saveIntoErrorLog("DBConnection.php", "DBConnection()", "mysqli_connect()");
			    return false;
			}

			$statement = mysqli_select_db($connection, $dbName);    
			if(!$statement) {
			    $this->saveIntoErrorLog("DBConnection.php", "DBConnection()", "mysqli_select_db()");
			    return false;
			}

			$this->connection = $connection;
			$this->statement = $statement;

			return true;

		/*} catch (Exception $e) {

			$this->saveIntoErrorLog("DBConnection.php", "DBConnection()", "", $e);
			return false;

		}*/
	}

	//Purpose: to call mysql_real_escape_string(), stripping slashes before only if necessary
	function sc_mysql_escape($value) {
	
		/*$dbUsername = MYSQL_DB_USER;
		$dbPassword = MYSQL_DB_PWD;
		$dbServer = MYSQL_DB_SERVER;
		$dbName = MYSQL_DB_NAME;

		$connection = mysqli_connect($dbServer, $dbUsername, $dbPassword);*/
		
		if (is_string($value));
	
		// strip out slashes IF they exist AND magic_quotes is on
		//if (get_magic_quotes_gpc() && (strstr($value,'\"') || strstr($value,"\\'"))) $value = stripslashes($value);
		if ((strstr($value,'\"') || strstr($value,"\\'"))) $value = stripslashes($value);
		
		// escape string to make it safe for mysql
		//echo "val=".$value;
		$ab = mysqli_real_escape_string($this->connection, $value);
		//echo "ab=".$ab;
		return $ab;
	}
	
	function CloseConnection()
	{
		//try {
			$close = mysqli_close($this->connection);

			if(!$close) {
			    $this->saveIntoErrorLog("DBConnection.php", "CloseConnection()", "mysqli_close()");
			}

			return true;

		/*} catch (Exception $e) {

			$this->saveIntoErrorLog("DBConnection.php", "CloseConnection()", "", $e);
			return false;

		}*/
	}

	/**	
	* Execute query for select
	*/    
	function SelectQuery($fileName="", $methodName="")
	{
		//try {
			if($this->connection && $this->statement) 
			{
				if(empty($this->dbQuery)) { return false; }

				$this->dbResult = mysqli_query($this->connection, $this->dbQuery);
				if(!$this->dbResult) {
					$this->saveIntoErrorLog($fileName, $methodName, $this->dbQuery);
					return false;
				}

				$rowCount = 0;
				$resultData = array();
				while($rowData = mysqli_fetch_array($this->dbResult, MYSQLI_ASSOC)) {
				    $resultData[$rowCount] = $rowData;
				    $rowCount++;
				}

//				mysql_free_result($this->dbResult);
				return $resultData;

			} else {
				return false;
			}

		/*} catch (Exception $e) {

			$this->saveIntoErrorLog($fileName, $methodName, "", $e);
			return false;

		}*/
	}

	/**	
	* Execute query for Insert
	*/    
	function InsertQuery($fileName="", $methodName="")
	{
		//try {
			if($this->connection && $this->statement) 
			{
				if(empty($this->dbQuery)) { return false; }

				$this->dbResult = mysqli_query($this->connection, $this->dbQuery);
				if(!$this->dbResult) {
					$this->saveIntoErrorLog($fileName, $methodName, $this->dbQuery);
					return false;
				}

				$id = mysqli_insert_id($this->connection);

				//mysql_free_result($this->dbResult);
				return $id;

			} else {
				return false;
			}

		/*} catch (Exception $e) {

			$this->saveIntoErrorLog($fileName, $methodName, "", $e);
			return false;

		}*/
	}

	/**	
	* Execute query for Update/Delete
	*/    
	function ExecuteQuery($fileName="", $methodName="")
	{
		//try {
			if($this->connection && $this->statement) 
			{
				if(empty($this->dbQuery)) { return false; }

				$this->dbResult = mysqli_query($this->connection, $this->dbQuery);
				
				if(!$this->dbResult) {
					$this->saveIntoErrorLog($fileName, $methodName, $this->dbQuery);
					return false;
				}
				
				$rows = 0;
				$rows = mysqli_affected_rows($this->connection);
	//			mysql_free_result($this->dbResult);
				return $rows;

			} else {
				return false;
			}

		/*} catch (Exception $e) {

			$this->saveIntoErrorLog($fileName, $methodName, "", $e);
			return false;

		}*/
	}
	
	
	/**	
	* Execute queries for webservice
	*/    
	function SelectQueryResult($fileName="", $methodName="")
	{
		//try {
			if($this->connection && $this->statement) 
			{
				if(empty($this->dbQuery)) { return false; }

				$this->dbResult = mysqli_query($this->dbQuery, $this->connection);
				if(!$this->dbResult) {
					$this->saveIntoErrorLog($fileName, $methodName, $this->dbQuery);
					return false;
				}

				$resultData = $this->dbResult;

				//mysql_free_result($this->dbResult);
				return $resultData;

			} else {
				return false;
			}

		/*} catch (Exception $e) {

			$this->saveIntoErrorLog($fileName, $methodName, "", $e);
			return false;

		}*/
	}
	

	/**
	* Use this method to log the database errors.
	*/				 
	function saveIntoErrorLog($fileName="", $methodName="", $sqlQuery="", $exception="")
	{
		$errorCode = mysqli_errno($this->connection);
		$errorText = mysqli_error($this->connection);

		$errorMessage = "File: ".$fileName.", Method/Function: ".$methodName.", Query: ".$sqlQuery.", Error: ".$errorCode."-".$errorText;
		if($exception != "")
			$errorMessage.= " Exception : ".$exception ;

		// timestamp for the error entry
		$errorMessage = "[".date("j-M-Y H:i:s (T)")."] ".$errorMessage."\r\n";

		// save to the error log
		error_log($errorMessage, 3, ERROR_LOG."ErrorLog".date("j-M-Y").".log");
	} 

} //ends the class over here
?>
