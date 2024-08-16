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
    dag_id = 'two_task_dag',
    description='two task dag',
    schedule_interval=None,
    default_args=default_args
) as dag:
    
    task0 = BashOperator(
        task_id='task_0',
        bash_command='echo "hi there"'
    )

    task1 = BashOperator(
        task_id='task_1',
        bash_command='echo "zzzzz..." && sleep 5s && echo "im awake"',
    )

    task0 >> task1