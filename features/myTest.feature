Feature: Frontend tests

	# to check first cucumber works or not
	Scenario: Check for transactions
		Given The browser is open
		When open player list
		And click on Show Transactions
		Then transactions are displayed