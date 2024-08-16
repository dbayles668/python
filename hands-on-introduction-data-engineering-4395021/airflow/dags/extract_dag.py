from datetime import datetime
from airflow.operators.bash import BashOperator
from airflow import DAG

default_args = {
    'owner': 'Dave',
    'depends_on_past': False,
    'email_on_failure': False,
    'email_on_retry': False,
    'retries': 0,
    'catchup': False,
    'start_date': datetime(2024, 8, 15)
}

with DAG(
    dag_id = 'extract_dag',
    description='extract dag',
    schedule_interval=None,
    default_args=default_args
) as dag:
    
    task1 = BashOperator(
        task_id='extract_task',
        bash_command='wget -c https://raw.githubusercontent.com/LinkedInLearning/hands-on-introduction-data-engineering-4395021/main/data/top-level-domain-names.csv -0 /workspaces/hands-on-introduction-data-engineering-4395021/lab/orchestrated/airflow-extract-data.csv'
    )